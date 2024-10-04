import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen 
          name='index' 
          options={{ 
            drawerLabel: "Principal", 
            headerTitle: "Principal", 
            drawerIcon: () => 
            <Ionicons name="home-outline" size={20} color="black" />, 
          }} 
        />
        <Drawer.Screen 
          name='list' 
          options={{ 
            drawerLabel: "Listagem", 
            headerTitle: "Listagem",
            drawerIcon: () => 
            <Ionicons name="list-outline" size={20} color="black" />, 
          }} 
        />
        <Drawer.Screen 
          name='payment' 
          options={{ 
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos",
            drawerIcon: () => 
            <Ionicons name="diamond-outline" size={20} color="black"/>, 
          }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default function Layout() {
  return DrawerLayout();
}