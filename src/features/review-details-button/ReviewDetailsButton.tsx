"use client";
import {
  ArrowToTopLeftIcon,
  CloseCircleOutlinedIcon,
  QuotesIcon,
} from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./ReviewDetailsButton.module.scss";

export const ReviewDetailsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="link_3" onClick={() => setIsOpen(true)}>
        <ArrowToTopLeftIcon />
        Читать отзыв полностью
      </Button>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content
            className={s.contentPopup}
            onClick={() => setIsOpen(false)}
          >
            <QuotesIcon />
            <p className="body_4">
              «Компания „Логопром“ зарекомендовала себя как надёжный партнёр
              в области решений для автоматизации промышленных процессов.
              Их экспертиза в интеграции современных технологий, таких
              как программируемые модули и системы управления, значительно
              повысила эффективность наших производственных линий. Особенно
              впечатляет гибкость их подходов: решения „Логопром“ легко
              адаптируются под специфику разных отраслей, что подтверждается
              примерами внедрения в более чем 50 производственных сценариях.
              Их команда оперативно реагирует на запросы, обеспечивая
              техническую поддержку и кастомизацию продуктов, что критично
              для минимизации простоев в работе. Сотрудничество с „Логопром“
              также позволило нам оптимизировать затраты за счёт внедрения
              энергоэффективных решений и сокращения ручного труда. Мы отмечаем
              высокую надёжность их оборудования, включая программируемые
              устройства, которые демонстрируют стабильную работу
              даже в условиях интенсивных производственных циклов. Рекомендуем
              „Логопром“ как поставщика комплексных решений для предприятий,
              стремящихся к цифровой трансформации. Их профессионализм
              и ориентация на долгосрочное партнёрство делают их ключевым
              игроком на рынке промышленной автоматизации».
            </p>
            <Dialog.DialogClose className={s.closeButton}>
              <CloseCircleOutlinedIcon />
            </Dialog.DialogClose>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </>
  );
};
