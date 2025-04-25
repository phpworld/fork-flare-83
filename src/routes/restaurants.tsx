
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Restaurants() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurants</h1>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Restaurants</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="nearby">Nearby</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="p-4 border rounded-md">
          <p>All restaurants content goes here</p>
        </TabsContent>
        
        <TabsContent value="favorites" className="p-4 border rounded-md">
          <p>Favorites content goes here</p>
        </TabsContent>
        
        <TabsContent value="nearby" className="p-4 border rounded-md">
          <p>Nearby restaurants content goes here</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
