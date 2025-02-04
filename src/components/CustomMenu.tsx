import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./HomePage";
import Adder from "./Adder";
import Translator from "./Translator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MultiplyTable from "./MultiplyTable";
import ExperiencePersonal from "./ExperiencePersonal";

const Drawer = createDrawerNavigator();

const CustomMenu: React.FC = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Página Inicial" component={HomePage} />
                <Drawer.Screen name="Sumadora" component={Adder} />
                <Drawer.Screen name="Traductor de Números" component={Translator} />
                <Drawer.Screen name="Tabla de Multiplicar" component={MultiplyTable} />
                <Drawer.Screen name="Experiencia Personal" component={ExperiencePersonal} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default CustomMenu;
