import java.util.*;
public class FinancialForecasting {

    public static double futureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enetr the present value: ");
        double presentValue = sc.nextDouble();
        double growthRate = 0.10;
        int years = 5;
        double result = futureValue(presentValue, growthRate, years);
        System.out.printf("Future Value after %d years = %.2f", years, result);
    }
}