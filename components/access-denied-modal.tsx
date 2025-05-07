"use client"

import { Lock } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AccessDeniedModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AccessDeniedModal({ isOpen, onClose }: AccessDeniedModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Lock className="h-8 w-8 text-red-600" />
          </div>
          <DialogTitle className="text-center text-xl font-bold text-red-600">Access Denied</DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Due to PRIVACY Reason
            <p className="font-bold text-lg mt-2">"Developer Rajan Denied your access"</p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button onClick={onClose} className="px-8">
            Understood
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
