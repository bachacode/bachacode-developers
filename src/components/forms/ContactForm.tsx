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
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact.form_section.form");

  const formSchema = z.object({
    name: z
      .string()
      .min(1, {
        message: t("errors.required", { field_name: t("name.label") }),
      })
      .max(50, {
        message: t("errors.max", { field_name: t("name.label"), amount: 50 }),
      }),
    company: z.optional(
      z
        .string()
        .max(50, {
          message: t("errors.max", {
            field_name: t("company_name.label"),
            amount: 50,
          }),
        }),
    ),
    email: z
      .string()
      .min(1, {
        message: t("errors.required", { field_name: t("email.label") }),
      })
      .email({ message: t("errors.email") })
      .max(50, {
        message: t("errors.max", { field_name: t("email.label"), amount: 50 }),
      }),
    subject: z
      .string()
      .min(1, {
        message: t("errors.required", { field_name: t("subject.label") }),
      })
      .max(50, {
        message: t("errors.max", {
          field_name: t("subject.label"),
          amount: 50,
        }),
      }),
    message: z.optional(
      z
        .string()
        .max(250, {
          message: t("errors.max", {
            field_name: t("message.label"),
            amount: 250,
          }),
        }),
    ),
  });

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
      setNotification(t("errors.recaptcha"));
      setLoading(false);
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      sendEmail(gReCaptchaToken, data);
    });
  }

  function sendEmail(
    gReCaptchaToken: string,
    data: z.infer<typeof formSchema>,
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
              <FormLabel>
                {t("name.label")} <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder={t("name.placeholder")} {...field} />
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
              <FormLabel>{t("company_name.label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("company_name.placeholder")} {...field} />
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
              <FormLabel>
                {t("email.label")} <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder={t("email.placeholder")} {...field} />
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
              <FormLabel>
                {t("subject.label")} <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder={t("subject.placeholder")} {...field} />
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
              <FormLabel>{t("message.label")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("message.placeholder")}
                  className="h-48 resize-none"
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
              className="bg-orange-primary-400 w-full"
              disabled
            >
              <FontAwesomeIcon
                className="h-6 w-6 animate-spin cursor-not-allowed"
                icon={faSpinner}
              />
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-primary hover:bg-orange-primary-400 w-full cursor-pointer"
            >
              {t("button")}
            </Button>
          )}
          {notification && (
            <p className="text-accent absolute mt-3 w-full text-center">
              {notification}
            </p>
          )}
        </div>
      </form>
    </Form>
  );
}
