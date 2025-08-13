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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useLocale, useTranslations } from "next-intl";
import { Turnstile } from "next-turnstile";
import axios from "axios";
import { ContactForm as ContactFormType } from "@/lib/schemas/contactFormSchema";

export default function ContactForm() {
  const t = useTranslations("contact.form_section.form");
  const locale = useLocale();

  const formSchema = z.object({
    name: z
      .string()
      .min(1, t("errors.required", { field_name: t("name.label") }))
      .max(50, t("errors.max", { field_name: t("name.label"), amount: 50 })),
    company: z
      .string()
      .max(50, t("errors.max", { field_name: t("company_name.label"), amount: 50 })),
    email: z
      .email(t("errors.email"))
      .min(1, t("errors.required", { field_name: t("email.label") }))
      .max(50, t("errors.max", { field_name: t("email.label"), amount: 50 })),
    subject: z
      .string()
      .min(1, t("errors.required", { field_name: t("subject.label") }))
      .max(50, t("errors.max", { field_name: t("subject.label"), amount: 50 })),
    message: z
      .string()
      .max(250, t("errors.max", { field_name: t("message.label"), amount: 250, })),
  });

  const form = useForm<ContactFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [error, setError] = useState(false);

  async function onSubmit(data: ContactFormType) {
    setLoading(true);

    if (turnstileStatus !== "success" || turnstileToken === null) {
      setError(true);
      setNotification(t("errors.captchaVerify"));
      setLoading(false);
      return;
    }

    await sendEmail(turnstileToken, data);
  }

  async function sendEmail(
    turnstileToken: string,
    data: z.infer<typeof formSchema>,
  ) {
    try {
      const response = await axios.post(`/api/contact?locale=${locale}`, {
        ...data,
        turnstileToken,
      });

      setError(false);
      setNotification(response.data.message);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setNotification(err.response.data?.message || err.message);
      } else {
        setNotification("Something went wrong while sending your message.");
      }
      setError(true);
    } finally {
      setLoading(false);
    }
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

        {/* Captcha/Turnstile */}
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          theme="light"
          retry="auto"
          refreshExpired="auto"
          sandbox={process.env.NODE_ENV === "development"}
          onError={() => {
            setError(true);
            setTurnstileStatus("error");
            setNotification("Security check failed. Please try again.");
            setTurnstileToken(null);
          }}
          onExpire={() => {
            setError(true);
            setTurnstileStatus("expired");
            setNotification("Security check expired. Please verify again.");
            setTurnstileToken(null);
          }}
          onLoad={() => {
            setError(false);
            setTurnstileStatus("required");
            setTurnstileToken(null);
          }}
          onVerify={(token) => {
            setTurnstileStatus("success");
            setTurnstileToken(token);
          }}
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
            <p
              className={`${error ? "text-red-500" : "text-accent"} absolute mt-3 w-full text-center`}
            >
              {notification}
            </p>
          )}
        </div>
      </form>
    </Form>
  );
}
