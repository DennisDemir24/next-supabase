import { supabaseClient } from "@/lib/supabase";

export const getTodos = async ({userId, token}: {userId: string; token: string}) => {
    const supabase = await supabaseClient(token)
    const {data: todos} = await supabase
        .from('todos')
        .select('*')
        .eq('user_id', userId)
    return todos
}