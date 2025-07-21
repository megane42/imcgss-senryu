import '@/App.css'
import { useState, useEffect } from 'react'
import { generateSenryu } from '@/lib/core/generateSenryu'
import { loadSenryu } from '@/lib/core/loadSenryu'
import { decodeIds } from '@/lib/utils/decodeIds'
import type { Senryu } from '@/lib/types/senryu'

function App() {
  const [senryu, setSenryu] = useState<Senryu | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const encodedIds = urlParams.get('q')

    if (encodedIds) {
      try {
        const idArray = decodeIds(encodedIds)
        const loadedSenryu = loadSenryu(idArray)
        setSenryu(loadedSenryu)
        setError(null)
      } catch (err) {
        console.error(err)
        setError('川柳の読み込みに失敗しました')
        setSenryu(null)
      }
    }
  }, [])

  const handleGenerateSenryu = () => {
    try {
      const newSenryu = generateSenryu()
      setSenryu(newSenryu)
      setError(null)
    } catch (err) {
      console.error(err)
      setError('川柳の生成に失敗しました')
      setSenryu(null)
    }
  }

  const formatSenryuPart = (chunks: Senryu['upperPart'] | Senryu['middlePart'] | Senryu['lowerPart']) => {
    return chunks.map(chunk => chunk.word).join('')
  }

  return (
    <>
      <h1>デレマス川柳</h1>
      <button onClick={handleGenerateSenryu}>川柳を生成</button>

      {error && (
        <div style={{ color: 'red' }}>
          <p>エラー: {error}</p>
        </div>
      )}

      {senryu && (
        <div>
          <p>{formatSenryuPart(senryu.upperPart)}</p>
          <p>{formatSenryuPart(senryu.middlePart)}</p>
          <p>{formatSenryuPart(senryu.lowerPart)}</p>
        </div>
      )}
    </>
  )
}

export default App
