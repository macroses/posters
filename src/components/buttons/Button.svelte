<button>
    <slot></slot>
</button>

<style lang=scss>
    button {
        text-transform: uppercase;
        border-radius: 6px;
        border: 0;
        background: var(--bg-color);
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        padding: 10px;
        transition: .2s;
        cursor: pointer;
        &:hover {
            background: lighten(#2baf8a, 5%);
        }
    }
</style>