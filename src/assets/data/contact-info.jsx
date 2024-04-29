import { Mail, MapPin, PhoneCall } from "lucide-react";

export const contactInfo = [
  {
    name: "Address",
    value: "123 Main St, New York, NY 10030",
    icon: <MapPin size={16} />,
  },
  {
    name: "Email",
    value: "support@company.com",
    icon: <Mail size={16} />,
  },
  {
    name: "Phone",
    value: "+1 234 567 8910",
    icon: <PhoneCall size={16} />,
  },
];
