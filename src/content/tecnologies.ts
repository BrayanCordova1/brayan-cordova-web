import AstroIcon from "@assets/icons/tecnologies/Astro.svg";
import PreactIcon from "@assets/icons/tecnologies/Preact.svg";
import TypescriptIcon from "@assets/icons/tecnologies/TypeScript.svg";
import JavascriptIcon from "@assets/icons/tecnologies/Javascript.svg";
import TailwindcssIcon from "@assets/icons/tecnologies/TailwindCSS.svg";
import FigmaIcon from "@assets/icons/tecnologies/Figma.svg";
import VercelIcon from "@assets/icons/tecnologies/Vercel.svg";
import NextjsIcon from "@assets/icons/tecnologies/Nextjs.svg";
import ReactIcon from '@assets/icons/tecnologies/React.svg';
import NodejsIcon from '@assets/icons/tecnologies/NodeJS.svg';
import GitIcon from '@assets/icons/tecnologies/Git.svg';
import MysqlIcon from '@assets/icons/tecnologies/MySQL.svg';
import BootstrapIcon from '@assets/icons/tecnologies/Bootstrap.svg';
import SeoIcon from '@assets/icons/tecnologies/SEO.svg';
import GoogleAnalitycsIcon from '@assets/icons/tecnologies/Google Analytics.svg';
import OracleVmVirtualBoxIcon from '@assets/icons/tecnologies/Oracle VM Virtual Box.svg';
import TrelloIcon from '@assets/icons/tecnologies/Trello.svg';
import Office365Icon from '@assets/icons/tecnologies/Office 365.svg';
import PhotoshopIcon from '@assets/icons/tecnologies/Photoshop.svg';
import IllustratorIcon from '@assets/icons/tecnologies/Illustrator.svg';
import Cloudflare from "@assets/icons/tecnologies/Cloudflare.svg"
import Resend from "@assets/icons/tecnologies/Resend.svg"
import Java from "@assets/icons/tecnologies/Java.svg"
import Datapack from "@assets/icons/tecnologies/Datapack.svg"
import Expo from "@assets/icons/tecnologies/Expo.svg"
import Supabase from "@assets/icons/tecnologies/Supabase.svg"
import Mdx from "@assets/icons/tecnologies/Mdx.svg"
import Json from "@assets/icons/tecnologies/Json.svg"
import FabricMc from "@assets/icons/tecnologies/FabricMc.svg"

export type Tecnology = { name: string; icon: ImageMetadata };

export const tecnologies = {
  Astro: { name: "Astro", icon: AstroIcon },
  Preact: { name: "Preact", icon: PreactIcon },
  Typescript: { name: "Typescript", icon: TypescriptIcon },
  Javascript: { name: "Javascript", icon: JavascriptIcon },
  Tailwindcss: { name: "Tailwindcss", icon: TailwindcssIcon },
  Figma: { name: "Figma", icon: FigmaIcon },
  Vercel: { name: "Vercel", icon: VercelIcon },
  Nextjs: { name: "Nextjs", icon: NextjsIcon },
  React: { name: "React", icon: ReactIcon },
  Nodejs: { name: "Nodejs", icon: NodejsIcon },
  Git: { name: "Git", icon: GitIcon },
  Mysql: { name: "Mysql", icon: MysqlIcon },
  Bootstrap: { name: "Bootstrap", icon: BootstrapIcon },
  Seo: { name: "Seo", icon: SeoIcon },
  GoogleAnalitycs: { name: "Google Analitycs", icon: GoogleAnalitycsIcon },
  OracleVmVirtualBox: { name: "OracleVmVirtualBox", icon: OracleVmVirtualBoxIcon },
  Trello: { name: "Trello", icon: TrelloIcon },
  Office365: { name: "Office365", icon: Office365Icon },
  Photoshop: { name: "Photoshop", icon: PhotoshopIcon },
  Illustrator: { name: "Illustrator", icon: IllustratorIcon },
  Cloudflare: { name: "Cloudflare", icon: Cloudflare },
  Resend: { name: "Resend", icon: Resend },
  Java: {name: "Java", icon: Java},
  Datapack: {name: "Datapack", icon: Datapack},
  ReactNative: {name: "React Native", icon: ReactIcon},
  Expo: {name: "Expo", icon: Expo},
  Supabase: {name: "Supabase", icon: Supabase},
  Mdx: {name: "Mdx", icon: Mdx},
  Json: {name: "Json", icon: Json},
  FabricMc: {name: "FabricMc", icon: FabricMc}
} satisfies Record<string, Tecnology>;

export const tecnologiesList: Tecnology[] = Object.values(tecnologies);
