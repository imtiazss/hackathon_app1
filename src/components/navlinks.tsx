"use client"

import * as React from "react"
import Link from "next/link"

import jewelry from '../../public/images/Jewelry-manu.jpeg'
import pants1 from '../../public/images/pants-menu.png'
import shoes1 from '../../public/images/shoes_menu.png'
import tops1 from '../../public/images/tops-menu.jpeg'

import Image from "next/image"
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { StaticImageData } from "next/image"

const components: { title: string; href: string; description: string ; image:StaticImageData}[] = [
  {
    title: "Tops",
    href: "/",
    description: "A collection of beautiful tops for your wardrobe to sleek took.",
    image : tops1,  
  },
  {
    title: "Paints",
    href: "/",
    description: "A collection of beautiful Paints for your wardrobe to sleek took.",
    image : pants1,
  },
  {
    title: "Accessories/Jewelry",
    href: "/",
    description: "A collection of beautiful Jewelry for your wardrobe to sleek took.",
    image : jewelry,
  },
  {
    title: "Shoes",
    href: "/",
    description:
      "A collection of beautiful Shoes for your wardrobe to sleek took.",
      image : shoes1,
  },

]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
         </Link>
         
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-myWhite1 ">
              {components.map((component) => (
                <ListItem className="hover:text-myOrange duration-300"
                
                  key={component.title}
                  title={component.title}
                  href={component.href}>
                    <div className="bg-myBlue h-1"></div>
                <div className="flex flex-row justify-start ">
                  <Image className="mr-4 w-10 h-auto" src ={component.image} alt= {component.title} />
                  <div className="text-xs mt-2"> {component.description}</div>
                  </div>
                </ListItem>
                 
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
