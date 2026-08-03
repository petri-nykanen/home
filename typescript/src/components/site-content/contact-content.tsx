import { Button, Group, Paper, Stack, Text, TextInput, Textarea, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

interface ContactValues {
  name: string;
  email: string;
  message: string;
}

const ContactContent = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const form = useForm<ContactValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? "Please enter your name." : null),
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : "Please enter a valid email."),
      message: (value) =>
        value.trim().length < 10
          ? "Please share a bit more detail so I can help you."
          : null,
    },
  });

  const handleSubmit = async (values: ContactValues) => {
    try {
      await emailjs.send(
        "service_o6n6ueq",
        "template_7zcwywf",
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          to_email: "petri.nykaenen@gmail.com",
        },
        "3rIPOug9jxV7pKm8l",
      );

      form.reset();
      setStatusMessage("Thanks! Your message was sent successfully.");
    } catch {
      setStatusMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <Paper
      shadow="md"
      radius="lg"
      p={{ base: "lg", md: "xl" }}
      className="border border-indigo-200 bg-white/90 backdrop-blur-md"
    >
      <Stack gap="md">
        <div className="text-center">
          <Title order={2} className="font-bold text-slate-800">
            Let’s build something great
          </Title>
          <Text c="dimmed" size="sm">
            Send a quick note and I’ll get back to you soon.
          </Text>
        </div>

        <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
          <Stack gap="md">
            <TextInput
              label="Name"
              placeholder="Your name"
              required
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              type="email"
              required
              {...form.getInputProps("email")}
            />
            <Textarea
              label="Message"
              placeholder="Tell me about your project or idea..."
              minRows={6}
              autosize
              required
              {...form.getInputProps("message")}
            />

            <Group justify="center">
              <Button type="submit" color="indigo" size="md">
                Send message
              </Button>
            </Group>

            {statusMessage ? (
              <Text c="green" size="sm" ta="center">
                {statusMessage}
              </Text>
            ) : null}
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
};

export default ContactContent;
