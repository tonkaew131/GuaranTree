import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import Burger from "../Burger"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [initialState, setInitialState] = useState(false)
  useEffect(() => {
    setInitialState(true)
  }, [])
  return (
    <>
      {initialState && (
        <Button variant="ghost" className="px-[3px] text-[14px] font-[600]">
          <Sheet>
            <SheetTrigger>
              <Burger />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </Button>
      )}
    </>
  )
}

export default Navbar
