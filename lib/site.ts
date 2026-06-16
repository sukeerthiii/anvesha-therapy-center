export const site = {
  name: "Anvesha",
  full: "Anvesha Therapy Center",
  tagline: "A ray of hope",
  promise: "Every child is taught to believe in themselves.",
  phoneDisplay: "+91 90000 00000",
  phone: "+919000000000",
  whatsapp: "919000000000",
  email: "hello@anvesha.org",
  address: "Anvesha Therapy Center, India",
  hours: "Mon to Sat, 9am to 6pm",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
