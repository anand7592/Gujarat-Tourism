import React from "react";
import { Card, CardContent } from "@/components/ui/card";


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const organizationName = "Gujarat Tourism";

  return (
    <footer className="w-full mt-auto  from-slate-600 to-gray-600 text-white">
      <Card className="rounded-none border-0 shadow-none bg-transparent">
        <CardContent className="px-8 py-6">
          

          <div className="border-t border-white/20 mt-6 pt-4 text-center">
            <p className="text-xs opacity-90">
              © {currentYear} {organizationName}. All rights reserved.
            </p>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
