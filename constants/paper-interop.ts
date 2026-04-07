import { Image as ExpoImage } from "expo-image";
import { cssInterop } from "nativewind";

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

cssInterop(Button as any, {
  className: {
    target: "style",
  },
});

cssInterop(Avatar.Icon as any, { className: { target: "style" } });
cssInterop(Avatar.Image as any, { className: { target: "style" } });
cssInterop(Avatar.Text as any, { className: { target: "style" } });
cssInterop(Card as any, { className: { target: "style" } });
cssInterop(Card.Actions as any, { className: { target: "style" } });
cssInterop(Card.Content as any, { className: { target: "style" } });
cssInterop(Card.Cover as any, { className: { target: "style" } });
cssInterop(Card.Title as any, { className: { target: "style" } });

cssInterop(Chip as any, { className: { target: "style" } });

cssInterop(Checkbox as any, { className: { target: "style" } });
cssInterop(TextInput as any, { className: { target: "style" } });
cssInterop(Switch as any, { className: { target: "style" } });
cssInterop(RadioButton as any, { className: { target: "style" } });
cssInterop(HelperText as any, { className: { target: "style" } });

cssInterop(List.Item as any, { className: { target: "style" } });
cssInterop(List.Section as any, { className: { target: "style" } });
cssInterop(DataTable as any, { className: { target: "style" } });
cssInterop(DataTable.Row as any, { className: { target: "style" } });
cssInterop(DataTable.Cell as any, { className: { target: "style" } });

cssInterop(ProgressBar as any, { className: { target: "style" } });
cssInterop(Divider as any, { className: { target: "style" } });
cssInterop(Snackbar as any, { className: { target: "style" } });

cssInterop(Modal as any, { className: { target: "style" } });
cssInterop(Searchbar as any, { className: { target: "style" } });
cssInterop(SegmentedButtons as any, { className: { target: "style" } });
cssInterop(IconButton as any, { className: { target: "style" } });
cssInterop(ToggleButton as any, { className: { target: "style" } });
