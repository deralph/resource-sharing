import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Rating from "./rating";
import { useNavigation } from "@react-navigation/native";

const InstitutionItem = ({ institution }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { book: institution })}
      className="bg-white rounded-xl flex flex-row w-full min-h-[176px] items-center justify-between p-2 mb-4 shadow"
    >
      {/**============== Institution Image ================ */}
      <View className="rounded-xl">
        <Image source={institution.image} style={{ height: 150, width: 140 }} />
      </View>

      {/**============== Institution information ================ */}
      <View className="w-[52%] h-full flex-col flex space-y-1 py-2">
        <Text className="font-exoSemibold text-darkGrayText text-xl capitalize">
          {institution.topic}
        </Text>

        {/**============== Rating and reviews ================ */}
        <View className="flex flex-row items-center space-x-2">
          <Rating rating={institution.rating} />
          <Text className="font-roboto text-darkGrayText text-xs text-left">
            {institution.rating + "  " + `(${institution.courseTitle})`}
          </Text>
        </View>
        <View className="flex flex-col space-y-1">
          <Text className="font-robotoBold text-darkGrayText text-sm capitalize">
            {institution.department}
          </Text>
          <Text className="font-roboto text-xs">{institution.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InstitutionItem;
