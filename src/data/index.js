import { PuzzlePieceIcon,TrophyIcon,FilmIcon,GifIcon,CalendarDaysIcon ,Cog6ToothIcon,ChatBubbleLeftEllipsisIcon,LanguageIcon} from "@heroicons/react/24/outline";

export const categories = [
    {
        id: 1,
        text: "گیم",
        icon: PuzzlePieceIcon
    },
    {
        id: 2,
        text: "ورزشی",
        icon:TrophyIcon
    },
    {
        id: 3,
        text: "انیمیشن",
        icon:GifIcon
    },
    {
        id: 4,
        text: "سریال و فیلم",
        icon:FilmIcon
    }
]

export const services = [
  {
    id: 1,
    text: "رویدادها",
    icon: CalendarDaysIcon,
  },
  {
    id: 2,
    text: "تنظیمات",
    icon: Cog6ToothIcon,
  },
  {
    id: 3,
    text: "پشتیبانی",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    id: 4,
    text: "زبان ها",
    icon: LanguageIcon,
  },
];