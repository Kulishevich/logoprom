import { BlockImage } from "@/widgets/block-image";
import { ContactsInfo } from "@/widgets/contacts-info";
import { ContactsLegalInformation } from "@/widgets/contacts-legal-information";
import { FeedbackForm } from "@/widgets/feedback-form";

export default function Contacts() {
  return (
    <main>
      <BlockImage image={"/contacts-background.jpg"} title="Контакты" />
      <ContactsInfo />
      <ContactsLegalInformation />
      <FeedbackForm />
    </main>
  );
}
