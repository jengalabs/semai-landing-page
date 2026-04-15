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
            <div className="bg-gradient-to-b from-primary/5 to-primary/10 rounded-3xl p-8 w-full max-w-sm border border-primary/20">
              <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">SEMAi</p>
                    <p className="text-sm text-muted-foreground">AI Assistant</p>
                  </div>
                </div>
                
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-bl-none p-4 ml-auto max-w-xs">
                  <p className="text-sm">semai</p>
                </div>
              </div>
              
              <div className="text-center mt-6 space-y-2">
                <p className="text-sm font-semibold text-foreground">Send to:</p>
                <p className="text-2xl font-bold text-primary">{SEMAI_CONFIG.shortcode}</p>
              </div>
            </div>
            
            <div className="text-center text-sm text-muted-foreground space-y-1">
              <p>Works on {SEMAI_CONFIG.networks.join(" and ")} in {SEMAI_CONFIG.country}</p>
              <p>No data needed - SMS only</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
