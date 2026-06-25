import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class AAAPatternTest {

    private int num1;
    private int num2;

    @Before
    public void setUp() {
        num1 = 2;
        num2 = 3;
        System.out.println("Setup executed");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }

    @Test
    public void testAddition() {

        // Arrange
        int expected = 5;

        // Act
        int result = num1 + num2;

        // Assert
        assertEquals(expected, result);
    }
}