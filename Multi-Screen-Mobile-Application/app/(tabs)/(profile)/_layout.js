import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Profile', headerShown: false }} //  hide top bar (or set title here)
      />
    </Stack>
  );
}
