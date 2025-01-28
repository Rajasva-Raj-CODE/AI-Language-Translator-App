"use client";
import { useUser } from "@clerk/nextjs";
import { Bookmark } from "lucide-react";

export default function SaveBtn() {
  const { isloaded, isSignedIn, user } = useUser();

  return (
    <button type="button">
      <Bookmark
        onClick={() => {
          if (isloaded && isSignedIn) {
            console.log("signed in");
          } else {
            console.log("not signed in");
          }
        }}
      />
    </button>
  );
}
