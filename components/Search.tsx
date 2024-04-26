"use client";
import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dataJson from "@/Data.json";
import { Search } from "lucide-react";
import Link from "next/link";

interface IDataItem {
  category: string[];
  topics?: string[];
  hastag: string;
  name: string;
  image: string;
  description: string;
  pricing: string;
  link: string;
}

export function SearchHeader() {
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<IDataItem[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const results = dataJson.filter(
      (item: IDataItem) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.category.some((cat) =>
          cat.toLowerCase().includes(value.toLowerCase())
        ) ||
        (item.topics &&
          item.topics.some((topic) =>
            topic.toLowerCase().includes(value.toLowerCase())
          )) ||
        item.hastag.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="w-full flex-1 md:w-auto md:flex-none">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center whitespace-nowrap transition-colors 
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
          disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent 
          hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start 
          rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground 
          shadow-none sm:pr-12 md:w-40 lg:w-64"
        >
          <span>Search...</span>
          <kbd
            className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] 
            hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 
            font-mono text-[10px] font-medium opacity-100 sm:flex"
          >
            <span className="text-xs">⌘</span>k
          </kbd>
        </button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            placeholder="Type a command or search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm 
            outline-none placeholder:text-muted-foreground border-none 
            disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <CommandList>
          {searchResults.length > 0 ? (
            <CommandGroup heading="Results">
              {searchResults.map((platform, index) => (
                <CommandItem key={index}>
                  <span>{platform.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ) : (
            <CommandEmpty>No results found</CommandEmpty>
          )}
          <CommandSeparator />
          <CommandGroup heading="Suggestions"></CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

interface TopicCount {
  [key: string]: number;
}

export function SearchHero() {
  const topicCounts = dataJson.reduce<TopicCount>((counts, platform) => {
    const topics = platform.topics || [];
    topics.forEach((topic) => {
      counts[topic] = (counts[topic] || 0) + 1;
    });
    return counts;
  }, {});

  return (
    <div className="mt-12 text-center">
      <div className="max-w-5xl mx-auto">
        <div
          className="lg:flex lg:justify-center grid grid-cols-2 
          space-x-2 gap-y-3"
        >
          {Object.entries(topicCounts).map(([topic, count]) => (
            <Button variant="ghost" className="border border-input" key={topic}>
              {topic}
              <span className="ml-2 p-[4px] bg-black text-white font-bol rounded-full">
                {count}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /**
  <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FaceIcon className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
           */
}
