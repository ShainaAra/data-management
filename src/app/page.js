import Image from "next/image";
import Logo from "./images/aretex-blue.png";
import GoogleIcon from "./images/google.png";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="w-[440px] h-[464px]">
      <Card className="p-8 
                      rounded-xl 
                      text-center 
                      shadow-xl 
                      bg-white">
        <div className="mb-6">
           <Image
            src={Logo}
            alt="Aretex Logo"
            width={170}
            height={170}
            className="mx-auto"
          />
        </div>

       <CardContent className="space-y-2 text-left">
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-sm text-gray-500">
            to continue to AretexDashboard
          </p>
        </CardContent>

       <div className="flex justify-center">
          <Button
            variant="outline"
            className="w-[325px] 
                       flex 
                       items-center 
                       justify-between 
                       px-8 py-4 
                       text-gray-700 
                       border-gray-300 
                       hover:bg-gray-100">

            <div className="flex items-center gap-2">
                <Image
                src={GoogleIcon}
                alt="Google"
                width={18}
                height={18}
              />
              <span>Continue to Google</span>
            </div>
           
          </Button>
        </div>
      </Card>
    </div>
  );
}