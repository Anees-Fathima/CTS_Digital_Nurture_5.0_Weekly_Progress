public class ECommerceSearch {

    static class Product {
        int productId;
        String productName;
        String category;

        Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        void display() {
            System.out.println(productId + " " + productName + " " + category);
        }
    }

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories")
        };
        for (Product product : products) {
            product.display();
        }

        int targetId = 103;

        // Linear Search
        Product linearResult = linearSearch(products, targetId);
        System.out.println("\nLinear Search Result:");
        if (linearResult != null) {
            linearResult.display();
        } else {
            System.out.println("Product Not Found");
        }

        // Binary Search
        Product binaryResult = binarySearch(products, targetId);
        System.out.println("\nBinary Search Result:");
        if (binaryResult != null) {
            binaryResult.display();
        } else {
            System.out.println("Product Not Found");
        }
    }
}