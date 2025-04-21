package chap_02;

import com.sun.xml.internal.ws.policy.EffectiveAlternativeSelector;

public class _04_Operater4 {
    public static void main(String[] args) {
        // 논리 연산자
        boolean 김치찌개 = true;
        boolean 계란말이 = true;
        boolean 제육볶음 = true;

        System.out.println(김치찌개 || 계란말이 || 제육볶음); // 하나라도 true 이면 true
        System.out.println(김치찌개 && 계란말이 && 제육볶음); // 모두 true 이면 true

        System.out.println((5 > 3) && (3 > 1)); // 5 는 3 보다 크고, 3 은 1 보다 크다 (true)
        System.out.println((5 > 3) && (3 < 1)); // 5 는 3 보다 크고, 3 은 1 보다 작다 (false)

        // Or 연산
        System.out.println((5 > 3) || (3 > 1)); // 5 는 3 보다 크거나, 3 은 1 보다 크다 (ture)
        System.out.println((5 > 3) || (3 < 1)); // 5 는 3 보다 크거나, 3 은 1 보다 작다 (ture)
        System.out.println((5 < 3) || (3 < 1)); // 5 는 3 보다 작거나, 3 은 1 보다 작다 (false)

        // 논리 부정 연산자
        System.out.println(!true); // false
        System.out.println(!false); // ture

        System.out.println(!(5 == 5)); // false
        System.out.println(!(5 == 3)); // ture
    }
}
