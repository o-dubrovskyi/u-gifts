import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';


/**
 * https://icons.expo.fyi/
 */
export function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}