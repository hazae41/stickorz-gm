import React, { useCallback } from "https://esm.sh/react";

export interface StickerData {
  id: string,
  hash: string,
  token: string,
  owner: string,
  tags: string,
  votes: string
}

async function download(sticker: StickerData) {
  const res = await fetch(`https://ipfs.infura.io/ipfs/${sticker.hash}/full`)
  if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`)
  return await res.blob()
}

async function upload(blob: Blob) {
  const data = new FormData()
  data.append("fichier", blob, "stickorz")
  const res = await fetch(
    "https://noelhack.haz.workers.dev",
    { method: "POST", body: data })
  if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`)
  return new URL(await res.text()).href
}

export function Sticker(props: {
  sticker: StickerData
  editor: Element
}) {
  const { sticker, editor } = props

  const reupload = useCallback(async () => {
    const blob = await download(sticker)
    const link = await upload(blob)
    const textarea = editor
      .getElementsByClassName("area-editor")[0];
    (textarea as HTMLTextAreaElement).value += ` ${link} `;
    (textarea as HTMLTextAreaElement).dispatchEvent(new Event("change"))
  }, [sticker])

  return <img className="sz-mx-1 sz-w-auto sz-cursor-pointer"
    style={{ height: 51 }}
    src={`https://ipfs.infura.io/ipfs/${sticker.hash}/mini`}
    onClick={reupload} />
}