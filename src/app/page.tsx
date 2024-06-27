// "use client"
import CreateGroup from "@/components/CreateGroup";
import Table from "@/components/Table";
import Tables from "@/components/Tables";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";



export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center justify-center flex flex-col">
        <h1 className="py-10 text-5xl font-semibold">welcome to nba prediction game</h1>
        <div className="flex flex-row space-x-6">
          <CreateGroup />
          <Button className="bg-blue-500 hover:bg-blue-700 text-xl">join Group</Button>
        </div>
        <div>
          <Tables />
        </div>
        
      </div>
    </main>
  );
}
