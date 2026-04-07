import ScrollSmootherWrapper from "./ScrollSmoother";
import ScrollAnimationsWrapper from "./ScrollAnimations";

function GSAPWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ScrollSmootherWrapper>
            <ScrollAnimationsWrapper>
                { children }
            </ScrollAnimationsWrapper>
        </ScrollSmootherWrapper>
    );
}

export default GSAPWrapper;