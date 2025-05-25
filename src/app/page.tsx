import {
  ArrowRightIcon,
  ArrowToTopLeftIcon,
  CartIcon,
} from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Pagination } from "@/shared/ui/pagination";
import { Select } from "@/shared/ui/select";
import { TextField } from "@/shared/ui/text-field";
import { FeedbackForm } from "@/widgets/feedback-form";

const options = [
  {
    option: "Популярные",
    value: "default",
  },
  {
    option: "Сначала дешевые",
    value: "price_asc",
  },
  {
    option: "Сначала дорогие",
    value: "price_desc",
  },
  {
    option: "По алфавиту А-Я",
    value: "name_asc",
  },
  {
    option: "По алфавиту Я-А",
    value: "name_desc",
  },
];

export default function Home() {
  return (
    <div>
      <FeedbackForm />
      <div>
        <Button variant={"link_2"}>
          <ArrowToTopLeftIcon />
          Отправить
        </Button>
        <Button variant={"link_3"}>
          <ArrowToTopLeftIcon />
          Подробнее
        </Button>

        <Button variant="nav_1">
          <ArrowRightIcon />
        </Button>
        <Button variant="nav_2">
          <ArrowRightIcon />
        </Button>
        <Button variant="nav_3">
          <ArrowRightIcon />
        </Button>
        <Button variant={"link_1"}>Подробнее о доставке</Button>
        <Button variant={"link_1"} disabled>
          Подробнее о доставке
        </Button>
        <Pagination totalPages={10} currentPage={"2"} />
        <Checkbox />
        <Checkbox disabled />

        <Button variant={"cart"}>
          <CartIcon />
          <p className="body_6">Коммерческое предложение</p>
          <p className="body_6">
            <strong>(0 товаров)</strong>
          </p>
        </Button>
      </div>
      <Select options={options} placeHolder={options[0].option} />
      {/* <div>
        <TextField variant="search_1" placeholder="Поиск по сайту" />
        <TextField
          variant="search_1"
          placeholder="Поиск по сайту"
          errorMessage={"ss"}
        />
        <TextField
          variant="search_1"
          placeholder="Поиск по сайту"
          disabled={true}
        />
        <h1 className="h1">Текст</h1>
        <h1 className="h2">Текст</h1>
        <h1 className="h3">Текст</h1>
        <h1 className="h4">Текст</h1>
        <TextField variant="search_2" placeholder="Поиск по сайту" />
        <TextField
          variant="search_2"
          placeholder="Поиск по сайту"
          errorMessage={"ss"}
        />
        <TextField
          variant="search_2"
          placeholder="Поиск по сайту"
          disabled={true}
        />
        <h1 className="h1">Текст</h1>
        <h1 className="h2">Текст</h1>
        <h1 className="h3">Текст</h1>
        <h1 className="h4">Текст</h1>
        <TextField variant="search_3" placeholder="Поиск по сайту" />
        <TextField
          variant="search_3"
          placeholder="Поиск по сайту"
          errorMessage={"ss"}
        />
        <TextField
          variant="search_3"
          placeholder="Поиск по сайту"
          disabled={true}
        />
      </div> */}
    </div>
  );
}
