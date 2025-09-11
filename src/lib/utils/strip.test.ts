import { describe, it, expect } from "vitest"
import { strip } from "./strip"
import type { Chunk } from "@/lib/types/senryu"

describe("strip", () => {
  it("should strip leading and trailing empty chunks", () => {
    const subject: Chunk[] = [
      { word: "", mora: 0 },
      { word: "渋谷", mora: 3 },
      { word: "凛", mora: 2 },
      { word: "", mora: 0 },
    ]

    expect(strip(subject)).toEqual([
      { word: "渋谷", mora: 3 },
      { word: "凛", mora: 2 },
    ])
  })

  it("should not strip leading and trailing non-empty chunks", () => {
    const subject: Chunk[] = [
      { word: "渋谷", mora: 3 },
      { word: "凛", mora: 2 },
      { word: "", mora: 0 },
    ]

    expect(strip(subject)).toEqual([
      { word: "渋谷", mora: 3 },
      { word: "凛", mora: 2 },
    ])
  })

  it("should do nothing when given empty chunks", () => {
    const subject: Chunk[] = []

    expect(strip(subject)).toEqual([])
  })
})