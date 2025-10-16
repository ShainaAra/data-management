"use client";

import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const UserTableAction = () => {
  return (
    <div className="bg-white shadow-md rounded-lg px-6 py-4 flex justify-between items-center">
      {/*Search Bar */}
      <div className="relative w-1/2">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
          strokeWidth={2}
        />
        <Input
          type="text"
          placeholder="Search by Name or Email"
          className="pl-10 text-sm"
        />
      </div>

      {/* Filters + Add User Button */}
      <div className="flex items-center gap-4">
        {/*Status Filter using Shadcn Select */}
        <div className="flex items-center gap-2">
          <Label
            htmlFor="status"
            className="text-sm font-medium text-gray-700"
          >
            Status:
          </Label>

          <Select defaultValue="all">
            <SelectTrigger
              id="status"
              className="w-[130px] text-sm border-gray-300"
            >
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/*Add User Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-sm">+ Add new user</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
            </DialogHeader>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("User added!");
              }}
              className="space-y-4 mt-2"
            >
              <div className="grid gap-2">
                <Label htmlFor="name">Enter your name</Label>
                <Input id="name" name="name" placeholder="Enter name" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </div>

              <DialogFooter className="pt-3">
                <DialogClose asChild>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default UserTableAction;
