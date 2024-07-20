-- CreateTable
CREATE TABLE "Register" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confirmPassword" TEXT NOT NULL,

    CONSTRAINT "Register_pkey" PRIMARY KEY ("id")
);
