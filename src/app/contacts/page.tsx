import { BlockImage } from "@/widgets/block-image";
import { ContactsInfo } from "@/widgets/contacts-info";
import { ContactsLegalInformation } from "@/widgets/contacts-legal-information";
import { FeedbackForm } from "@/widgets/feedback-form";

export default function Contacts() {
  return (
    <>
      <BlockImage image={"/contacts-background.jpg"} title="Контакты" />
      <main>
        <ContactsInfo />
        <ContactsLegalInformation />
        <FeedbackForm />
      </main>
    </>
  );
}
