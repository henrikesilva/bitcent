import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react";
import RedeSocial from "./redeSocial";

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandYoutube />} url="https://www.youtube.com/" />
            <RedeSocial icone={<IconBrandInstagram />} url="https://www.instagram.com/rick.sl" />
            <RedeSocial icone={<IconBrandFacebook />} url="https://www.facebook.com/" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/henrikesilva" />
        </div>
    )
}