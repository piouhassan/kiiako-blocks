import { componentRegistry } from '../../lib/componentRegistry';
import { headingDefinition } from './Heading';
import { textDefinition } from './Text';
import { buttonDefinition } from './Button';
import { imageDefinition } from './Image';
import { videoDefinition } from './Video';
import { galleryDefinition } from './Gallery';
import { dividerDefinition } from './Divider';
import { iconDefinition } from './Icon';
import { spacerDefinition } from './Spacer';

// Enregistrer tous les components atomiques
componentRegistry.registerComponent(headingDefinition);
componentRegistry.registerComponent(textDefinition);
componentRegistry.registerComponent(buttonDefinition);
componentRegistry.registerComponent(imageDefinition);
componentRegistry.registerComponent(videoDefinition);
componentRegistry.registerComponent(galleryDefinition);
componentRegistry.registerComponent(dividerDefinition);
componentRegistry.registerComponent(iconDefinition);
componentRegistry.registerComponent(spacerDefinition);

// Exporter pour utilisation
export {
  headingDefinition,
  textDefinition,
  buttonDefinition,
  imageDefinition,
  videoDefinition,
  galleryDefinition,
  dividerDefinition,
  iconDefinition,
  spacerDefinition,
};
