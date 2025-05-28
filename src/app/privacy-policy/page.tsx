import { BlockImage } from "@/widgets/block-image";
import { PrivacyPolicySection } from "@/widgets/privacy-policy-section";

export default function Reviews() {
  return (
    <>
      <BlockImage
        image={"/privacy-policy-background.png"}
        title="Политика конфиденциальности"
      />
      <main>
        <PrivacyPolicySection />
      </main>
    </>
  );
}
