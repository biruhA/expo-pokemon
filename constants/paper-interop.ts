import { cssInterop } from "nativewind";
import { Image as ExpoImage } from "expo-image";

// Expo Image
cssInterop(ExpoImage, { className: "style" });

import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Chip,
  DataTable,
  Divider,
  HelperText,
  IconButton,
  List,
  Modal,
  ProgressBar,
  RadioButton,
  Searchbar,
  SegmentedButtons,
  Snackbar,
  Switch,
  TextInput,
  ToggleButton,
} from "react-native-paper";

/**
 * Register React Native Paper components with NativeWind.
 * This allows using the 'className' prop for Tailwind styles.
 *
 * We use 'as any' to avoid TypeScript errors since Paper components
 * don't natively have a 'className' prop in their type definitions.
 */

// Button components
cssInterop(Button as any, {
  className: {
    target: "style",
  },
});

// Avatar components
cssInterop(Avatar.Icon as any, { className: { target: "style" } });
cssInterop(Avatar.Image as any, { className: { target: "style" } });
cssInterop(Avatar.Text as any, { className: { target: "style" } });

// Card components
cssInterop(Card as any, { className: { target: "style" } });
cssInterop(Card.Actions as any, { className: { target: "style" } });
cssInterop(Card.Content as any, { className: { target: "style" } });
cssInterop(Card.Cover as any, { className: { target: "style" } });
cssInterop(Card.Title as any, { className: { target: "style" } });

// Chip component
cssInterop(Chip as any, { className: { target: "style" } });

// Form components
cssInterop(Checkbox as any, { className: { target: "style" } });
cssInterop(TextInput as any, { className: { target: "style" } });
cssInterop(Switch as any, { className: { target: "style" } });
cssInterop(RadioButton as any, { className: { target: "style" } });
cssInterop(HelperText as any, { className: { target: "style" } });

// List and Data Table
cssInterop(List.Item as any, { className: { target: "style" } });
cssInterop(List.Section as any, { className: { target: "style" } });
cssInterop(DataTable as any, { className: { target: "style" } });
cssInterop(DataTable.Row as any, { className: { target: "style" } });
cssInterop(DataTable.Cell as any, { className: { target: "style" } });

// Feedback and Progress
cssInterop(ProgressBar as any, { className: { target: "style" } });
cssInterop(Divider as any, { className: { target: "style" } });
cssInterop(Snackbar as any, { className: { target: "style" } });

// Navigation and Layout
cssInterop(Modal as any, { className: { target: "style" } });
cssInterop(Searchbar as any, { className: { target: "style" } });
cssInterop(SegmentedButtons as any, { className: { target: "style" } });
cssInterop(IconButton as any, { className: { target: "style" } });
cssInterop(ToggleButton as any, { className: { target: "style" } });
