"use server";

export const registerUser = async (data: any) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("An error occurred", error);
  }
};

export const loginUser = async (data: any) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("An error occurred", error);
  }
};
