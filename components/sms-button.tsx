"use client"

import { useState, useEffect } from "react"
import { SEMAI_CONFIG } from "@/config/semai"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface SMSButtonProps {
  children: React.ReactNode
  className?: string
}

export function SMSButton({ children, className }: SMSButtonProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      setIsMobile(mobileRegex.test(userAgent))
    }
    checkMobile()
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault()
      setShowDialog(true)
    }
    // On mobile, let the default sms: link behavior happen
  }

  return (
    <>
      <a
        href={`sms:${SEMAI_CONFIG.shortcode}?body=semai`}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Text SEMAi from your phone</DialogTitle>
            <DialogDescription className="text-center">
              Open the SMS app on your phone and send a message
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col items-center gap-6 py-6">
            <div className="bg-primary/10 rounded-2xl p-6 w-full">
              <div className="text-center space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Send to:</p>
                  <p className="text-3xl font-bold text-primary">{SEMAI_CONFIG.shortcode}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Message:</p>
                  <p className="text-2xl font-mono font-semibold text-foreground">semai</p>
                </div>
              </div>
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              <p>Works on {SEMAI_CONFIG.networks.join(" and ")} in {SEMAI_CONFIG.country}</p>
              <p className="mt-1">No data needed - just SMS</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
