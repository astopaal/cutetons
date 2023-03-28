import React from 'react'

import { Button } from 'cutetons'
import 'cutetons/dist/index.css'

const App = () => {
  return (
    <>
    {/* örnek birkaç buton importu */}
    <Button type="dashed" text="Yeni Button"></Button>
    <Button type="primary" text="Yeni Button"></Button>
    <Button type="link" text="Yeni Button"></Button>

    </>
  )
  
}

export default App
