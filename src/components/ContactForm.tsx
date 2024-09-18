"use client";
import React, { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const formSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio." })
    .min(2, { message: "El nombre debe de poseer al menos 2 caracteres." })
    .max(50, {
      message: "El nombre debe de ser de un maximo de 50 caracteres.",
    }),
  company: z.optional(z.string().max(50)),
  email: z
    .string({ required_error: "El correo electrónico es obligatorio." })
    .email({
      message:
        "Este campo debe de tener formato de correo,  e.j: example@mail.com",
    })
    .max(50, {
      message:
        "El correo electrónico debe de ser de un maximo de 50 caracteres.",
    }),
  subject: z
    .string({ required_error: "El asunto es obligatorio." })
    .min(2, {
      message: "El asunto debe de poseer al menos 2 caracteres.",
    })
    .max(50, {
      message: "El asunto debe de ser de un maximo de 50 caracteres.",
    }),
  message: z.optional(
    z.string().max(250, {
      message: "El mensaje debe de ser de un maximo de 250 caracteres.",
    })
  ),
});

export default function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);
    if (!executeRecaptcha) {
      setNotification(
        "Algo ha fallado con la llave del reCAPTCHA, pongase en contacto con la administración por otros medios."
      );
      setLoading(false);
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      sendEmail(gReCaptchaToken, data);
    });
  }

  function sendEmail(
    gReCaptchaToken: string,
    data: z.infer<typeof formSchema>
  ) {
    const apiEndpoint = "/api/contacto";

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify({ ...data, gReCaptchaToken }),
    })
      .then((res) => res.json())
      .then((response) => {
        setNotification(response.message);
        setLoading(false);
      })
      .catch((err) => {
        setNotification(err.message);
        setLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Tu nombre */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tu nombre</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese su nombre completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Nombre de la compañia */}
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la compañia (opcional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese el nombre de su compañia"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Correo electrónico */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese su correo eléctronico" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Asunto */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asunto</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese su asunto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tu mensaje */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tu mensaje (opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escribenos un mensaje"
                  className="resize-none h-48"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="relative">
          {loading ? (
            <Button
              type="submit"
              className="w-full bg-orange-primary-400"
              disabled
            >
              <FontAwesomeIcon
                className="animate-spin w-6 h-6 cursor-not-allowed"
                icon={faSpinner}
              />
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-orange-primary-400"
            >
              Enviar
            </Button>
          )}
          {notification && (
            <p className="absolute mt-3  text-accent text-center w-full">
              {notification}
            </p>
          )}
        </div>
      </form>
    </Form>
  );
}
