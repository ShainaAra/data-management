'use client';

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
import { useState } from "react";

const UserTableAction = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false); //controls the dialog visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both name and email are provided
    if (!name.trim() || !email.trim()) {
      alert("Please enter both name and email.");
      return;
    }

    const newUser = {
      userId: `U${Math.floor(Math.random() * 10000)}`,
      name,
      email,
      phone: "+69xxxxxxxxx",
      created: new Date().toISOString().split("T")[0],
      lastActive: "Just now",
      status: "Active",
    };

    onAddUser(newUser);
    setName("");
    setEmail("");

    //Close dialog only after successful submit
    setOpen(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg px-6 py-4 flex justify-between items-center">
      {/* Search Bar */}
      <div className="relative w-1/2">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
          strokeWidth={2}
        />
        <Input type="text" placeholder="Search by Name or Email" className="pl-10 text-sm" />
      </div>

      <div className="flex items-center gap-4">
        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <Label htmlFor="status" className="text-sm font-medium text-gray-700">
            Status:
          </Label>
          <Select defaultValue="all">
            <SelectTrigger id="status" className="w-[130px] text-sm border-gray-300">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Add User Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="text-sm">+ Add new user</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

                {/* Save button only closes when handleSubmit runs successfully */}
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
