'use client';

import { SingleImageDropzone } from '@/components/edgestore/SingleImageDropzone';
import { useEdgeStore } from '@/lib/edgestore';
import { useState } from 'react';
import { Button } from '../ui/button';

export function SingleImageUpload() {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const [uploadedImgUrl, setUploadedImgUrl] = useState("");

  return (
    <div>
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />
      <Button
        className='w-[12rem]'
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => {
                // you can use this to show a progress bar
                console.log(progress);
              },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
            setUploadedImgUrl(res.url);
            localStorage.setItem("event_banner_url", JSON.stringify(res.url));
          }
        }}
      >
        Upload
      </Button>
      <input name='event_banner_url' className='hidden' value={uploadedImgUrl} onChange={() => { }} />
    </div>
  );
}