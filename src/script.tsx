import React, { useCallback, useEffect, useMemo, useState } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { Sticker, StickerData } from "./sticker.tsx";

const editors = document
  .getElementsByClassName("conteneur-editor")
for (let i = 0; i < editors.length; i++)
  render(editors[i])

function render(editor: Element) {
  const div = document.createElement("div")
  ReactDOM.render(<Script editor={editor} />, div)
  editor.append(div)
}

const endpoint = "https://api.thegraph.com/subgraphs/name/hazae41/stickorz"

async function graphql<T>(query: string) {
  const headers = { "Content-Type": "application/json" }
  const body = JSON.stringify({ query })
  const res = await fetch(endpoint,
    { method: "POST", headers, body })
  if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`)
  const json = await res.json()
  return json.data as T
}

function Script(props: {
  editor: Element
}) {
  const { editor } = props

  const [stickers, setStickers] =
    useState<StickerData[]>()
  const getStickers = useCallback(async () => {
    const { stickers } = await graphql<{
      stickers: StickerData[]
    }>(`{ stickers(first: 100, orderBy: token, orderDirection: desc){ id, token, hash, tags, owner, votes } }`)
    setStickers(stickers)
  }, [])
  useEffect(() => {
    getStickers()
  }, [])

  return <div className="sz-flex sz-p-2 sz-overflow-x-auto">
    {stickers?.map(sticker =>
      <Sticker
        sticker={sticker}
        editor={editor} />)}
  </div>
}