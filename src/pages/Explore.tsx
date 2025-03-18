import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { open } from '@tauri-apps/plugin-dialog';
import {invoke} from '@tauri-apps/api/core';

const Explore: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [filePath, setFilePath] = useState<string | null>(null);

  const handleFileSelect = async () => {
    try {
      const selected = await open({
        multiple: false,
        filters: [{ name: 'All Files', extensions: ['*'] }],
      });

      if (typeof selected === 'string') {
        setFilePath(selected);
      }
    } catch (error) {
      console.error('Error selecting file:', error);
    }
  };

  const handleContinue = async () => {
    if (filePath) {
      try {
        await invoke('open_file', { filePath });
        console.log('File path sent to Rust backend:', filePath);
        setIsDialogOpen(false);
      } catch (error) {
        console.error('Error invoking open_file command:', error);
      }
    }
  };


  return (
    <div className="flex items-center justify-center h-screen bg-[#0f0618]">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select a File</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            {filePath && <p className="text-sm break-all">{filePath}</p>}
            <Button onClick={handleFileSelect}>Choose File</Button>
            <Button onClick={handleContinue} disabled={!filePath}>
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Explore;
