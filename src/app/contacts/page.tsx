import { ContactsImage } from "@/widgets/contacts-image";
import { ContactsInfo } from "@/widgets/contacts-info";
import { ContactsLegalInformation } from "@/widgets/contacts-legal-information";
import { FeedbackForm } from "@/widgets/feedback-form";

export default function Contacts() {
  return (
    <main>
      <ContactsImage />
      <ContactsInfo />
      <ContactsLegalInformation />
      <FeedbackForm />
    </main>
  );
}
