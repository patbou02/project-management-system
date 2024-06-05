import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import NoProjectSelected from '../components/NoProjectSelected.jsx';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/NoProjectSelected">
        <NoProjectSelected/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews