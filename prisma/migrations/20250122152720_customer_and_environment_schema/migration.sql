-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "environments" (
    "id" TEXT NOT NULL,
    "environment" TEXT NOT NULL,
    "url_pi" TEXT NOT NULL,
    "user_pi" TEXT NOT NULL,
    "password_pi" TEXT NOT NULL,
    "url_ci" TEXT NOT NULL,
    "user_ci" TEXT NOT NULL,
    "password_ci" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "environments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "environments_customer_id_key" ON "environments"("customer_id");

-- AddForeignKey
ALTER TABLE "environments" ADD CONSTRAINT "environments_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
