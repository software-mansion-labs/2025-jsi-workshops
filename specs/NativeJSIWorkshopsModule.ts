import { TurboModule, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  readonly install: () => void;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeJSIWorkshopsModule',
);
